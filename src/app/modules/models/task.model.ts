// Interface para el objeto CreationDateTime
export interface CreationDateTime {
    _seconds: number;
    _nanoseconds: number;
  }
  
  // Interface para el objeto Task
  export interface Task {
    id: string;
    email: string;
    title: string;
    description: string;
    status: boolean;
    creationDateTime: CreationDateTime;
  }
  