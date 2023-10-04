import React from 'react'



const Pagination = ({ ordersPerPage, totalOrders, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div>
        {pageNumbers.map(number => 
        {number === currentPage? (
            
            <div key={number} onClick={() => paginate(number)} style={{display: 'inline-block', padding: '10px', margin: '5px', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'teal'}}>
                {number}
            </div>
        ):(
            <div key={number} onClick={() => paginate(number)} style={{display: 'inline-block', padding: '10px', margin: '5px', borderRadius: '5px', cursor: 'pointer'}}>
                {number}
            </div>

        )}

        )}
    </div>
  )
}

export default Pagination