/**
 * Type Definitions
 * Shared types used across the application
 */

export interface Sport {
  name: string;
  type: string;
  image: string;
  description: string;
  programs: string[];
  athletes: string;
}

export interface Achievement {
  year: number;
  events: Event[];
}

export interface Event {
  title: string;
  result: string;
  location: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  featured: boolean;
}

export interface Athlete {
  name: string;
  sport: string;
  achievement: string;
  year: string;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactInfo {
  address: string;
  phone: string[];
  email: string[];
  workingHours: string;
}

export interface NavLink {
  path: string;
  label: string;
}
