const MyPZhelpers = {
  phoneNumberRegex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
  emailRegex: /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  fullUrlRegex: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
};

export default MyPZhelpers;
