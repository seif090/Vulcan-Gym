export enum UserRole {
  ADMIN = 'ADMIN',
  BRANCH_MANAGER = 'BRANCH_MANAGER',
  RECEPTIONIST = 'RECEPTIONIST',
  TRAINER = 'TRAINER',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  branchId?: string;
  avatar?: string;
}

export interface Branch {
  id: string;
  name: string;
  location: string;
  managerId: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
  status: 'active' | 'expired' | 'pending';
  branchId: string;
  qrCode: string;
  subscriptionId?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  durationMonths: number;
  price: number;
  description: string;
}

export interface Subscription {
  id: string;
  memberId: string;
  planId: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'expired' | 'canceled';
  paidAmount: number;
}

export interface AttendanceRecord {
  id: string;
  memberId: string;
  branchId: string;
  checkIn: string;
  checkOut?: string;
}

export interface PaymentRecord {
  id: string;
  memberId: string;
  amount: number;
  date: string;
  method: 'cash' | 'card' | 'online';
  status: 'paid' | 'pending' | 'failed';
  subscriptionId: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'supplements' | 'merch' | 'equipment';
  stock: number;
  minStock: number;
  price: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  timestamp: string;
  isRead: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  branch: string;
  status: 'active' | 'on-leave' | 'terminated';
  joinDate: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'discount' | 'special-offer' | 're-engagement';
  status: 'active' | 'scheduled' | 'expired';
  reach: number;
  conversion: number;
  startDate: string;
  endDate: string;
}

export interface DietPlan {
  id: string;
  name: string;
  memberId: string;
  nutritionistId: string;
  dailyCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
  meals: {
    time: string;
    description: string;
  }[];
  status: 'active' | 'draft';
  createdAt: string;
}

export interface MaintenanceLog {
  id: string;
  equipmentName: string;
  category: 'cardio' | 'strength' | 'infrastructure';
  lastService: string;
  nextService: string;
  status: 'operational' | 'under-repair' | 'needs-service';
  priority: 'low' | 'medium' | 'high';
}

export interface Feedback {
  id: string;
  memberName: string;
  rating: number;
  category: 'facility' | 'staff' | 'trainer' | 'app';
  comment: string;
  date: string;
  status: 'pending' | 'reviewed' | 'resolved';
}

export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  memberId: string;
  trainerId: string;
  exercises: {
    name: string;
    sets: number;
    reps: string;
    rest?: string;
  }[];
  createdAt: string;
}
