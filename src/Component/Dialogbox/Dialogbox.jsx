const Dialogbox=()=>{
    return(
        <>
       
<div class="page-wrapper">
  <a class="btn trigger" href="#">click me</a>
</div>

<div class="modal-wrapper">
  <div class="modal">
    <div class="head">
      <a class="btn-close trigger" href="#">
        <i class="fa fa-times" aria-hidden="true"></i>
      </a>
    </div>
    <div class="content">
        <div class="good-job">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <h1>Good Job!</h1>
        </div>
    </div>
  </div>
</div>


        </>

    )
}
export default Dialogbox;