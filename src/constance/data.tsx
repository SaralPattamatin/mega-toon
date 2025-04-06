import { StaticImageData } from "next/image";

import blue_lock_1 from "@/assets/bookstore/blue_lock_1.jpg";
import blue_lock_2 from "@/assets/bookstore/blue_lock_2.jpg";
import blue_lock_3 from "@/assets/bookstore/blue_lock_3.jpg";
import blue_lock_4 from "@/assets/bookstore/blue_lock_4.jpg";
import blue_lock_5 from "@/assets/bookstore/blue_lock_5.jpg";
import blue_lock_6 from "@/assets/bookstore/blue_lock_6.jpg";
import blue_lock_7 from "@/assets/bookstore/blue_lock_7.jpg";
import blue_lock_8 from "@/assets/bookstore/blue_lock_8.jpg";
import blue_lock_9 from "@/assets/bookstore/blue_lock_9.jpg";

import blue_page_1 from "@/assets/mockimage/br_1_p_1.jpg";
import blue_page_2 from "@/assets/mockimage/br_1_p_2.jpg";
import blue_page_3 from "@/assets/mockimage/br_1_p_3.jpg";
import blue_page_4 from "@/assets/mockimage/br_1_p_4.jpg";

import thumbnail_1 from "@/assets/thumnel/Thumbnail_4.jpg";
import thumbnail_2 from "@/assets/thumnel/Thumbnail_5.jpg";
import thumbnail_3 from "@/assets/thumnel/thumbnail_2.jpg";
import thumbnail_4 from "@/assets/thumnel/thumbnail_6.jpg";

export type type = {
  image?: StaticImageData;
  title?: string;
};

export const thumbnails: type[] = [
  { image: thumbnail_1 },
  { image: thumbnail_2 },
  { image: thumbnail_3 },
  { image: thumbnail_4 },
];

export const bookList: type[] = [
  {
    image: blue_lock_1,
    title: "Blue Lock",
  },
  {
    image: blue_lock_2,
    title: "Blue Lock เล่มที่ 2",
  },
  {
    image: blue_lock_3,
    title: "Blue Lock เล่มที่ 3",
  },
  {
    image: blue_lock_4,
    title: "Blue Lock เล่มที่ 4",
  },
  {
    image: blue_lock_5,
    title: "Blue Lock เล่มที่ 5",
  },
  {
    image: blue_lock_6,
    title: "Blue Lock เล่มที่ 6",
  },
  {
    image: blue_lock_7,
    title: "Blue Lock เล่มที่ 7",
  },
  {
    image: blue_lock_8,
    title: "Blue Lock เล่มที่ 8",
  },
  {
    image: blue_lock_9,
    title: "Blue Lock เล่มที่ 9",
  }
];

export const days: type[] = [
  { title: "จันทร์" },
  { title: "อังคาร" },
  { title: "พุธ" },
  { title: "พฤหัสบดี" },
  { title: "ศุกร์" },
  { title: "เสาร์" },
  { title: "อาทิตย์" },
];

export const bluepage: type[] = [
  {
    image: blue_page_1,
  },
  {
    image: blue_page_2,
  },
  {
    image: blue_page_3,
  },
  {
    image: blue_page_4,
  },
];
