import React from "react";

export type AddResidentProps = {
  closeInviteResident: React.MouseEventHandler<HTMLDivElement>;
  isInviteResident: boolean;
};

export type InputsResident = {
  fullname: string;
  private: string;
  numberOfHouse: string;
  email: string;
  phoneNumber: string;
}