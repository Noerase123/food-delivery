export const menuTabs = [
  {
    title: 'Pending Orders',
    newItemCount: 3,
    name: 'pendingOrders',
  },
  {
    title: 'For Pickup',
    newItemCount: 0,
    name: 'forPickup'
  },
  {
    title: 'On Delivery',
    newItemCount: 5,
    name: 'onDelivery'
  },
  {
    title: 'Order History',
    newItemCount: 30,
    name: 'orderHistory'
  }
]

export const columns = [
  {
    label: 'Product ID',
    value: 'productID'
  },
  {
    label: 'Customer',
    value: 'customer'
  },
  {
    label: 'Store',
    value: 'store'
  },
  {
    label: 'Payment Status',
    value: 'paymentStatus'
  },
  {
    label: 'Delivery Status',
    value: 'deliveryStatus'
  }
]

interface IRowData {
  productID: string
  customer: string
  store: string
  paymentStatus: string
  deliveryStatus: string
}

export const rowsData: IRowData[] = [
  {
    productID: '1',
    customer: 'Customer',
    store: 'Store',
    paymentStatus: 'Paid',
    deliveryStatus: 'Ready'
  },
  {
    productID: '2',
    customer: 'Customer',
    store: 'Store',
    paymentStatus: 'Paid',
    deliveryStatus: 'Ready'
  },
  {
    productID: '3',
    customer: 'Customer',
    store: 'Store',
    paymentStatus: 'Paid',
    deliveryStatus: 'Ready'
  },
  {
    productID: '4',
    customer: 'Customer',
    store: 'Store',
    paymentStatus: 'Paid',
    deliveryStatus: 'Ready'
  },
  {
    productID: '5',
    customer: 'Customer',
    store: 'Store',
    paymentStatus: 'Paid',
    deliveryStatus: 'Ready'
  }
]