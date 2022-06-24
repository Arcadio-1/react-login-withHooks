export const EmailVali = (email) => {
  if (email.includ("@")) {
    return true;
  } else {
    return false;
  }
};
export const PassVali = (pass) => {
  if (pass.trim().legnth > 6) {
    return true;
  } else {
    return false;
  }
};
