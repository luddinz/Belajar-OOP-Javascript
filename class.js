// Class

class motorMatic {
  constructor(merk, warna, tipe) {
    this.merkMotor = merk;
    this.warnaMotor = warna;
    this.tipeMotor = tipe;
  }

  hasilResearchMotor() {
    console.log(
      `Saya mau beli ${this.merkMotor} dengan ${this.warnaMotor} yang menggunakan tipe ${this.tipeMotor}`
    );
  }
}

class Moge extends motorMatic {
  constructor(merk, warna, tipe, ccMotor) {
    super(merk, warna, tipe);
    this.ccMotor = ccMotor;
  }
}

hasilResearchMotor2 () {
  console.log(`Akhirnya saya beli motor ${this.merk} dengan cc ${ccMotor}`);
}