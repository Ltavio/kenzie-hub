import React, { ReactNode } from "react";

export interface ITechs {
  id: string;
  title: string;
  status: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: string[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IStatesLoading {
  loginLoading: boolean;
}

export interface IChildren {
  children: ReactNode;
}

export interface IEditTechs {
  status: string;
}
