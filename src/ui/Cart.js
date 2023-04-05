"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { SlHandbag } from "react-icons/sl";
import { TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../app/CartContext";
import { removeItem, resetCart } from "../redux/cartReducer";

const Cart = ({ open }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const { handleMouseLeave } = useContext(CartContext);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const totalOrder = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price + 5.99));
    return total.toFixed(2);
  };

  if (products.length === 0) {
    return (
      <div
        open={open}
        className="rounded-lg absolute right-[35px] md:top-[70px] z-[99] bg-white p-[30px] border-[1px] border-footer top-[65px] text-center"
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="font-medium text-[16px] text-left">Il mio carrello</h1>
        <SlHandbag className="m-auto mt-5 mb-5" size={70} />
        <h2 className="font-medium text-[16px] mb-5">
          Il tuo carrello è vuoto.
        </h2>
        <button className="font-satoshi font-bold uppercase tracking-wider mt-5 flex bg-blueish text-buttontext p-3 w-[250px] m-auto gap-3 justify-center items-center border-[2px] border-blueish hover:ease-in hover:border-[2px] hover:border-blueish hover:bg-buttontext hover:text-blueish hover:cursor-pointer mb-3">
          <Link href="./my-account/preferiti" className="hover:cursor-pointer">
            Visualizza preferiti
          </Link>
        </button>
        <Link
          href="./view-all"
          className="text-center hover:cursor-pointer underline-offset-2 underline"
        >
          Continua lo shopping
        </Link>
      </div>
    );
  }
  if (products.length > 0) {
    return (
      <div
        open={open}
        onMouseLeave={handleMouseLeave}
        className="rounded-lg absolute right-[35px] md:top-[70px] z-[99] bg-white p-[20px] border-[1px] border-footer top-[60px] w-[400px] font-satoshi overflow-y-scroll"
      >
        <h1 className="font-medium">Il mio carrello</h1>
        <div className="max-h-[50vh]  overflow-y-scroll">
          {products?.map((item) => (
            <div key={item.id}>
              <div className="flex gap-4 mt-5 ">
                <Image
                  src={item.img}
                  alt={item.title}
                  width="100"
                  height="100"
                  className="w-[100px] h-[130px] min-w-[100px] min-h-[130px] max-w-[100px] max-h-[130px]"
                />
                <div className="w-[100%] relative">
                  <p className="uppercase text-[12px] text-gray-400 font-medium">
                    {item.category}
                  </p>
                  <p className="font-satoshi text-[15px]">{item.title}</p>
                  <p className="font-satoshi text-blueish text-[15px]">
                    €{item.price}
                  </p>
                  <p className="text-[14px]">Quantità: {item.quantity}</p>
                  <button
                    className="absolute bottom-0 right-0"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <TbTrash size={20} stroke="grey" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          className="text-redish text-[12px] mt-3 hover:underline hover:underline-offset-2 hover:cursor-pointer hover:decoration-redish"
          onClick={() => dispatch(resetCart())}
        >
          Reset Cart
        </p>
        <hr className="mt-3 mb-4"></hr>
        <div className="text-[14px] flex justify-between">
          <p>Ordine</p>
          <p>€{totalPrice()}</p>
        </div>
        <div className="mt-2 text-[14px] flex justify-between">
          <p>Spedizione</p>
          <p>€5.99</p>
        </div>
        <hr className="mt-5 mb-3"></hr>
        <div className="mt-1 text-[14px] font-satoshi mb-5 flex justify-between">
          <p className="text-[16px]">
            <b>Totale</b>
          </p>
          <p className="text-[16px]">
            <b>€{totalOrder()} </b>
          </p>
        </div>
        <button className="w-full bg-blueish text-white p-4 font-alpino uppercase font-semibold tracking-wider">
          <Link href="/my-account/carrello">Acquista Ora</Link>
        </button>
        <button className="font-alpino uppercase font-semibold tracking-wider mt-2 w-full bg-white border-2 border-blueish text-blueish p-4">
          <Link href="/my-account/carrello">Visualizza Carrello</Link>
        </button>
      </div>
    );
  }
};

export default Cart;
