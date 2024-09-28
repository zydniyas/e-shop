"use client";

import { Button, Drawer } from "flowbite-react";
import { useContext } from "react";
import CartContext from "../../../context/cart-context/CartContext";
import { HiShoppingCart } from "react-icons/hi";

export function DrawerAddToCart() {
  const { isOpen, setIsOpen, handleClose, cart } = useContext(CartContext);
  console.log("cart:", cart);

  return (
    <>
      <Drawer className="w-3/12" open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header titleIcon={HiShoppingCart} title="Your Cart" />
        <Drawer.Items>
          {/* Cart Item 1*/}
          {cart?.map((item, index) => (
            <div className="mb-4 flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                {/* Product Image */}
                <img
                  src={item.thumbnail}
                  alt="Product"
                  className="mr-4 h-16 w-16 rounded object-cover"
                />
                {/* Product Details */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  {/* Quantity Controls */}
                  <div className="mt-2 flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => {
                        /* Decrease quantity */
                      }}
                    >
                      -
                    </button>
                    <span className="text-sm text-gray-700">1</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => {
                        /* Increase quantity */
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* Remove Button */}
              <button
                className="text-sm text-red-500 hover:underline"
                onClick={() => {
                  /* Remove item from cart */
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-900">Total</span>
              <span className="text-lg font-medium text-gray-900">$65.00</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            {/* Checkout Button */}
            <button className="mt-4 w-full rounded bg-cyan-600 px-4 py-2 text-center text-white hover:bg-cyan-700">
              Proceed to Checkout
            </button>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
