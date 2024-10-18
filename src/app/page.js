import Link from 'next/link'
import { ShoppingCart } from '@mui/icons-material'
export default function Home() {
  return (
    <div className="">
      <div  className="hero flex flex-col bg-orange-500 p-12 justify-center items-center">
        <input style={{ width:'50vw', height:'6vh' }} className="p-3 font-bold text-orange-600 rounded-lg" placeholder="Search Items"/>
        <div className="flex space-x-6 font-bold text-white p-6 md:text-2xl ">
        <Link href='/'>
          <p className="text-white cursor-pointer">Buy</p>
        </Link>
          <Link href='/sell'>
          <p className="hover:text-white cursor-pointer">Sell</p>
          </Link>
          <Link href='/gift_cards'>
            <p className="hover:text-white cursor-pointer">Gift Cards</p>
          </Link>
          <p className="hover:text-white cursor-pointer">Contact us</p>
        </div>
      </div>
      <div className="p-16 grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="product shadow-md p-6 rounded-lg  space-y-2 hover:bg-orange-100 cursor-pointer">
          <img className="p-4" src='https://picsum.photos/id/237/250/300' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Product 1</p>
          <p className="font-bold text-gray-600 text-sm">Product 1 available in all colours</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$48.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$60.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 5 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://picsum.photos/id/23/250/300' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Product 1</p>
          <p className="font-bold text-gray-600 text-sm">Product 1 available in all colours</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$48.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$60.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 5 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://picsum.photos/id/26/250/300' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Product 1</p>
          <p className="font-bold text-gray-600 text-sm">Product 1 available in all colours</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$48.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$60.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 5 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://picsum.photos/id/30/250/300' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Product 1</p>
          <p className="font-bold text-gray-600 text-sm">Product 1 available in all colours</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$48.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$60.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 5 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://picsum.photos/id/240/250/300' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Product 1</p>
          <p className="font-bold text-gray-600 text-sm">Product 1 available in all colours</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$48.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$60.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 5 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
