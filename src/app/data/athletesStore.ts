import { useEffect, useState, useRef } from "react";

export type Athlete = {
  id: number;
  name: string;
  sport: string;
  image?: string;
  coverImage?: string;
  birthDate?: string;
  region?: string;
  height?: string;
  weight?: string;
  bio?: string;
  achievements?: Array<Record<string, any>>;
  stats?: Record<string, any>;
  age?: number | string;
  status?: string;
};

const API_BASE =
  (import.meta.env && import.meta.env.VITE_API_URL) || "http://localhost:4000";

async function api(path: string, opts: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `API error ${res.status}`);
  }
  return res.json().catch(() => null);
}

export const AthletesAPI = {
  async getAll(): Promise<Athlete[]> {
    return (await api(`/api/athletes`)) as Athlete[];
  },

  async getById(id: number): Promise<Athlete | undefined> {
    return (await api(`/api/athletes/${id}`)) as Athlete | undefined;
  },

  async create(payload: Omit<Athlete, "id">): Promise<Athlete> {
    return (await api(`/api/athletes`, {
      method: "POST",
      body: JSON.stringify(payload),
    })) as Athlete;
  },

  async update(id: number, patch: Partial<Athlete>): Promise<Athlete> {
    return (await api(`/api/athletes/${id}`, {
      method: "PUT",
      body: JSON.stringify(patch),
    })) as Athlete;
  },

  async remove(id: number): Promise<boolean> {
    await api(`/api/athletes/${id}`, { method: "DELETE" });
    return true;
  },

  async reset(): Promise<void> {
    await api(`/api/athletes/reset`, { method: "POST" });
  },
};

export function useAthletes(pollInterval = 5000) {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    async function load() {
      try {
        const list = await AthletesAPI.getAll();
        if (mounted.current) setAthletes(list);
      } catch (e) {
        console.error("Failed to load athletes from API:", e);
      }
    }
    load();

    const t = setInterval(() => {
      load();
    }, pollInterval);

    return () => {
      mounted.current = false;
      clearInterval(t);
    };
  }, [pollInterval]);

  const refresh = async () => {
    try {
      const list = await AthletesAPI.getAll();
      setAthletes(list);
    } catch (e) {
      console.error(e);
    }
  };

  const add = async (payload: Omit<Athlete, "id">) => {
    try {
      const created = await AthletesAPI.create(payload);
      setAthletes((s) => [...s, created]);
      return created;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const update = async (id: number, patch: Partial<Athlete>) => {
    try {
      const updated = await AthletesAPI.update(id, patch);
      setAthletes((s) => s.map((a) => (a.id === id ? updated : a)));
      return updated;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const remove = async (id: number) => {
    try {
      await AthletesAPI.remove(id);
      setAthletes((s) => s.filter((a) => a.id !== id));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const reset = async () => {
    try {
      await AthletesAPI.reset();
      await refresh();
    } catch (e) {
      console.error(e);
    }
  };

  return { athletes, add, update, remove, refresh, reset } as const;
}

export default AthletesAPI;
