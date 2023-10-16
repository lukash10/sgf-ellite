<template>


<div class="container mt-4">
        <div class="row">
        <!-- BEGIN SEARCH RESULT -->
            <div class="col-md-12">
                <div class="grid search">
                    <div class="grid-body">
                            <div class="row">
                            <!-- BEGIN FILTERS -->
                                <div class="col-md-3">
                                    <h2 class="grid-title" style="color:#008360"><i class="fa fa-filter"></i> Ordenar por</h2>
                                    <hr>
                                    <div class="checkbox">
                                        <label><input type="checkbox" class="icheck"> Data de Publicação</label>
                                    </div>
                                    <div class="checkbox">
                                        <label><input type="checkbox" class="icheck"> Título</label>
                                    </div>


                                    <div class="padding"></div>
                                    
                                </div>
                            <!-- END FILTERS -->
                            <!-- BEGIN RESULT -->
                            <div class="col-md-9">
                                <h2 style="color:#008360"><i class="fa-solid fa-file"></i> Resultado</h2>
                                <hr>
                                <!-- BEGIN SEARCH INPUT -->
                                <div class="input-group">
                                    <input type="text" class="form-control" value="">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
                                </span>
                                </div>
                                <!-- END SEARCH INPUT -->
                                <p>Pesquise por Editais ou Portarias</p>
                                
                                <div class="padding"></div>
                                
                                
                                <!-- BEGIN TABLE RESULT -->
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td class="number" style="padding-top:20px">Edital</td>
                                                <td class="image"><img type="button" src="/pdf.svg" alt=""></td>
                                                <td class="product"><span type="button">Descrição do Edital<br><b>01/01/0001</b></span></td>
                                                <td class="rate text-right"><span type="button"><i class="fa fa-download" aria-hidden="true"></i> Download</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- END TABLE RESULT -->
                                
                                <!-- BEGIN PAGINATION -->
                                <ul class="pagination">
                                    <li class="disabled"><a href="#">«</a></li>
                                    <li class="active"><a href="#">1</a></li>

                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">»</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




</template>