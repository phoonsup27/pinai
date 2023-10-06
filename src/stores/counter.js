import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'สไปรท์ ', img: 'https://ustatic.priceza.com/img/productgroup/75024-1-l.jpg', price: 30 },
    { name: ' โค้ก ', img: 'https://images.deliveryhero.io/image/darkstores/Thailand/content/26052023/8851959132012_1.jpg?height=480', price: 15 },
    { name: ' FANTA น้ำอัดลม กลิ่นสตรอเบอรี่ ', img: 'https://www.dohome.co.th/media/catalog/product/cache/e446f15aaa8dc66b80b7a0df334f7c5a/1/0/10155666-fanta-_-_-450-_.jpg', price: 20 },
    { name: 'เป๊ปซี่ น้ำอัดลม ', img: 'https://images.deliveryhero.io/image/nv/Thailand/Vendor-Ops/22122022/TH-Pepsi-Cola-Pet-195L-front-view-Edit.jpg?height=480', price: 35 },
    { name: ' เอส เครื่องดื่มอัดลม กลิ่นส้ม ', img: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/70/88/8851952113070/8851952113070_2-20230627180217-.jpg', price: 30 },


  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
