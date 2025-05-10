import React from 'react'

const ModalCreate = (props) => {
    //criar um cupom
    
  return (
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-dark text-white ">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
        <button type="button" data-bs-dismiss="modal" className='btn' aria-label="Close"><i className='bi bi-x fs-3 text-light'></i></button>
      </div>
      <div class="modal-body">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalCreate