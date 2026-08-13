export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleId: string;
  image: string;
  bio: string;
  specialty: string;
  experience: string;
}

export interface Architect {
  id: string;
  name: string;
  specialty: string;
  role: string;
  email: string;
  password: string; // lightweight access control — frontend only
}


export interface ServiceItem {
  id: string;
  title: string;
  titleIndo: string;
  description: string;
  details: string[];
  iconName: string;
  image?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Komersial' | 'Residensial' | 'Urban';
  location: string;
  year: string;
  client: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  stats: { label: string; value: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
  date: string;
  status?: 'pending' | 'reviewing' | 'approved' | 'declined';
  assignedTo?: string;
  adminNotes?: string;
  priority?: 'low' | 'medium' | 'high';
  timelineEstimate?: string;
}
