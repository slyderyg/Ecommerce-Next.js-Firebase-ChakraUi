import React from 'react'



const Pagination = ({ ordersPerPage, totalOrders, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div>
        {pageNumbers.map(number => 
            <>
            {
            number === currentPage? (
                <span key={number} style={{margin: '5px', cursor: 'pointer', backgroundColor: '#b2f5ea'}} onClick={() => paginate(number)}>
                {number}
                </span>
            ):(
                <span key={number} style={{margin: '5px', cursor: 'pointer'}} onClick={() => paginate(number)}>
                {number}
                </span>
            )
            }
            </>
        )}
    </div>
  )
}

export default Pagination