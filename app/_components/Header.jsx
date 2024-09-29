"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutGrid,
  Search,
  ShoppingCart,
  UserCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"; // Shadcn sheet for the cart popup
import { useRouter } from "next/navigation";
import GlobalApi from "../_utils/GlobalApi";

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredItems, setFilteredItems] = useState([]); // State for filtered items
  const router = useRouter(); // Initialize router

  useEffect(() => {
    getCategoryList();
    checkLoginStatus(); // Check if user is logged in
  }, []);

  useEffect(() => {
    // Filter items whenever the search term changes
    filterItems();
  }, [searchTerm]);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log("Response Data:", resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  const checkLoginStatus = () => {
    const token = sessionStorage.getItem("jwt"); // Use 'sessionStorage' instead of 'localStorage'
    setIsLoggedIn(!!token); // Set login status based on existence of JWT
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      router.push("/"); // Redirect to home if user is logged in
    }
  };

  const handleAddToCart = () => {
    // Add functionality to add items to cart
    setCartItems((prevItems) => [
      ...prevItems,
      { name: "Sample Item", price: 10.0 },
    ]); // Dummy item for now
  };

  const filterItems = () => {
    if (searchTerm) {
      // Assuming you have an array of items to search through (for example, you can fetch items from your API)
      const allItems = []; // Replace this with your actual items data
      const filtered = allItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]); // Reset if search term is empty
    }
  };

  return (
    <div className="p-5 shadow-lg flex bg-orange-600 justify-between">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={100} // Set appropriate width
            height={50} // Set appropriate height
            layout="intrinsic" // Use layout property if needed
          />
        </Link>

        <div className="md:flex gap-3 items-center border border-black rounded-full p-2 px-5 hidden bg-orange-600">
          <Search className="text-black" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent placeholder-black text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2
              className="hidden md:flex gap-2 items-center
                            border border-black rounded-full p-2 px-10 bg-orange-600 cursor-pointer"
            >
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Akasa: Yummy Flying</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <Link key={index} href={"/items-category/" + category.name}>
                <DropdownMenuItem className="flex gap-2 items-center uppercase font-sans">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${category.icon[0].url}`} // Accessing the first element of the icon array
                    alt={category?.name || "Image"}
                    width={30}
                    height={30}
                  />
                  <h2 className="text-lg">{category?.name}</h2>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-3 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <h1 className="flex gap-2 items-center text-lg cursor-pointer">
              <ShoppingCart />
              {cartItems.length}
            </h1>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
              <SheetClose asChild>
                <Button className="absolute top-3 right-3" variant="ghost">
                  <X />
                </Button>
              </SheetClose>
              <SheetDescription>
                Review your items and proceed to checkout.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <span>Total:</span>
              <span>
                $
                {cartItems
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
              </span>
            </div>
            {/* Payment Options */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Payment Options</h2>
              <div className="flex flex-col gap-2">
                <Button variant="default" className="w-full">
                  Pay with Credit Card
                </Button>
                <Button variant="default" className="w-full">
                  Pay with PayPal
                </Button>
                <Button variant="default" className="w-full">
                  Pay with Google Pay
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {isLoggedIn ? (
          <div
            onClick={handleProfileClick}
            className="cursor-pointer flex items-center"
          >
            <UserCircle className="h-8 w-8 text-black" />
            <span className="ml-2">Profile</span> {/* Optional: Profile text */}
          </div>
        ) : (
          <Link href={"/sign-in"}>
            <Button className="bg-[#5C0FD9] shadow-md">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
