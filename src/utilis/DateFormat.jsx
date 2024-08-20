import moment from "moment";
import React from "react";

export const dateFormat = (date) => {
  return moment(date).format("DD/MM/YYYY");
};
