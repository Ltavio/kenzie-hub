import React, { ReactNode } from "react";

export interface IChildrenRegister {
  children: ReactNode;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}
