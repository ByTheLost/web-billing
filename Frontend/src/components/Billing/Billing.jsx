import '../../assets/css/styles.min.css'

function Billing() {
  return (
    <div className='card-body' style={{ padding: '3em' }}>
      <div className='card' style={{ paddingTop: '2em', paddingBottom: '2em', paddingRight: '4em', paddingLeft: '4em', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 className='card-title fw-semibold mb-4' style={{ fontSize: '3em'}}>Factura</h1>
        <div className='card-body' style={{ marginBottom: '2em',padding: '2em', borderRadius: '2em', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <form>
            <div className='row'>
              <p className='card-title fw-normal mb-4' style={{ fontSize: '1.5em'}}>Datos del Documento</p>
              <hr />
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Email</label>
                  <input type="email" className='form-control'/>
                </div>
              </div>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Other Field</label>
                  <input type="text" className='form-control'/>
                </div>
              </div>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Other Field</label>
                  <input type="text" className='form-control'/>
                </div>
              </div>
            </div>     
          </form>
        </div>
        <div className='card-body' style={{ marginBottom: '2em',padding: '2em', borderRadius: '2em', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <form>
            <div className='row'>
              <p className='card-title fw-normal mb-4' style={{ fontSize: '1.5em'}}>Datos de Emisor</p>
              <hr />
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Email</label>
                  <input type="email" className='form-control'/>
                </div>
              </div>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Other Field</label>
                  <input type="text" className='form-control'/>
                </div>
              </div>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Other Field</label>
                  <input type="text" className='form-control'/>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='card-body' style={{ marginBottom: '2em',padding: '2em', borderRadius: '2em', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <form>
            <div className='row'>
              <p className='card-title fw-normal mb-4' style={{ fontSize: '1.5em'}}>Datos del Receptor</p>
              <hr />
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Email</label>
                  <input type="email" className='form-control'/>
                </div>
              </div>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Other Field</label>
                  <input type="text" className='form-control'/>
                </div>
              </div>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Other Field</label>
                  <input type="text" className='form-control'/>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='card-body' style={{ marginBottom: '3em',padding: '2em', borderRadius: '2em', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <form>
            <div className='row'>
              <p className='card-title fw-normal mb-4' style={{ fontSize: '1.5em'}}>Detalles de Productos</p>
              <hr />
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Email</label>
                  <input type="email" className='form-control'/>
                </div>
              </div>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Other Field</label>
                  <input type="text" className='form-control'/>
                </div>
              </div>
              <div className='col'>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Other Field</label>
                  <input type="text" className='form-control'/>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-secondary m-1' style={{width: '40%', height: '3em'}}>Agregar</button>
        </div>
      </div>
    </div>
  )
}

export default Billing
