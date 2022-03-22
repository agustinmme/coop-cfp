import {IUser, IUserRaw, payment} from "./types";

export function normalizeData(data: IUserRaw[]): IUser[] {
  return data.map((user) => ({
    ...user,
    payments: user.payments
      .split(",")
      .filter((value) => value !== "")
      .map((value) => {
        let rObj: payment = {mth: "", amount: ""};
        const splited = value.split(":");

        rObj["mth"] = splited[0];
        rObj["amount"] = splited[1];

        return rObj;
      }),
    course: user.course.split(","),
  }));
}

export function parseCurrency(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);
}

export function timeSince(date: Date) {
  var seconds = Math.floor((Date.now() - Number(date)) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return " hace " + Math.floor(interval) + " año";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return " hace " + Math.floor(interval) + " meses";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return " hace " + Math.floor(interval) + " dias";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return " hace " + Math.floor(interval) + " horas";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return " hace " + Math.floor(interval) + "  minutos";
  }

  return " hace " + Math.floor(seconds) + " segundos";
}
