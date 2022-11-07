class contactDTO {
  full_name;
  email;
  phone;
  address;
  id;

  constructor(data) {
    this.full_name = data.full_name;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
    this.id = data.id;
  }
}
