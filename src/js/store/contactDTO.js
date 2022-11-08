class contactDTO {
  full_name;
  email;
  phone;
  address;
  id;
  agenda_slug;

  constructor(data) {
    this.full_name = data.full_name;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
    this.id = data.id;

    //hardcoded to DSBT  since this is the default agenda to use
    this.agenda_slug = "DSBT";
  }
}
