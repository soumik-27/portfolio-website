
// Fix: Import React to resolve 'Cannot find namespace React'
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
