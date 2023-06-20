export const VNDFORMAT = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export const city = ["Ha Noi", "Ho Chi Minh", "Da Nang"];

export const district: { [key: string]: string[] } = {
  "Ha Noi": ["Cau Giay", "Thanh Xuan", "Ba Dinh", "Nam Tu Liem"],
  "Ho Chi Minh": ["Binh Thanh", "Tan Binh", "Go Vap"],
  "Da Nang": ["Lien Chieu", "Cam Le"],
};

export const ward : { [key: string]: string[] }= {
  "Cau Giay": [
    "Dich Vong",
    "Mai dich",
    "Dich Vong Hau",
    "Trung Hoa",
    "Yen Hoa",
  ],
  "Thanh Xuan": ["Ha Dinh", "Nhan Chinh", "Thuong Dinh", "Khuong Trung"],
  "Ba Dinh": ["Doi Can", "Giang Vo", "Kim Ma"],
  "Nam Tu Liem": [
    "Cau Dien",
    "My Dinh 1",
    "Phu Do",
    "Me Tri",
    "My Dinh 2",
    "Trung Van",
  ],
  "Binh Thanh": ["1", "2", "3", "5", "6", "7"],
  "Tan Binh": ["1", "2", "3", "4", "5", "6", "7"],
  "Go Vap": ["1", "2", "3", "4", "5", "6", "7"],
  "Lien Chieu": [
    "Hoa Minh",
    "Hoa Khanh Nam",
    "Hoa Khanh Bac",
    "Hoa Hiep Nam",
    "Hoa Hiep Bac",
  ],
  "Cam Le": [
    "Khue Trung",
    "Hoa Phat",
    "Hoa Xuan",
    "Hoa An",
    "Hoa Tho Dong",
    "Hoa Tho Tay",
  ],
};
export const statusChoice = ["Full", "Exist"]

export const prices = ["<3 Milion", "3 - 5 Milion", ">5 Milion"]

export const squares = ["<20 m2", "20 - 40 m2", ">40 m2"]