const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

// Users modelini tanımla
const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  kullaniciAd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  }
}, {
  timestamps: false
});

async function createUsersTable() {


  //Users modelinde tablo oluşturma


  // force: true genellikle geliştirme aşamasında veya veritabanı şemasında büyük değişiklikler yaptığınızda kullanılır.
  //   alter: true ise mevcut verilerinizi koruyarak sadece tablo yapısını güncellemek istediğinizde kullanılır.
  await Users.sync(/*{ force: true }*/);
  console.log("Users tablosu oluşturuldu.");


  //Users modelinde veri ekleme
  await Users.create({
    kullaniciAd: "Ruhadam",
    password: "123456789",
    gender: true
  });

  console.log("Kişi başarıyla oluşturuldu");
}

createUsersTable();

module.exports = Users;
