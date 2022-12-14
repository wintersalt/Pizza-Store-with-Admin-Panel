import Product from '../../components/product/Product'
import Navbar from '../../layout/navbar/Navbar'
import ModalProducts from '../../components/modal-products/ModalProducts'
import { openProductModal } from '../../store/features/modalProductSlice'
import { ToastContainer } from 'react-toastify'
import { useAppSelector, useAppDispatch } from '../../store'
import { PropagateLoader } from 'react-spinners'
import { useGetStoreItemsQuery } from '../../api/apiSlice'
import './Products.css'

const Products = () => {
  const { data: items, isLoading, isSuccess, isError } = useGetStoreItemsQuery()

  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.modalProductState.isOpen)

  const openModal = () => {
    dispatch(openProductModal())
  }

  let content

  if (isLoading) {
    content = (
      <>
        <PropagateLoader
          color='var(--main-accent-color)'
          style={{ alignSelf: 'center', marginTop: '1rem' }}
        />
      </>
    )
  } else if (isSuccess && items.length) {
    content = items.map((item) => (
      <Product
        id={item._id}
        image={item.image_path}
        description={item.description}
        key={item._id}
        name={item.name}
      />
    ))
  } else if (isSuccess && items.length === 0) {
    content = (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '1rem'
        }}
      >
        <img
          src='https://cdn-icons-png.flaticon.com/512/2748/2748558.png'
          style={{ width: '500px' }}
        />
      </div>
    )
  } else if (isError) {
    content = <h1>Error loading data..</h1>
  }

  return (
    <div className='products'>
      <Navbar />
      <div className='products__body'>
        {isOpen && <ModalProducts />}
        <div className='products__body__head'>
          <h1>All Products</h1>
          <button onClick={openModal}>Add Product</button>
        </div>
        {content}
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme='dark'
        />
      </div>
    </div>
  )
}

export default Products
