<?php
require_once __DIR__ . '/vendor/autoload.php';

$defaultFontConfig = (new Mpdf\Config\FontVariables())->getDefaults();
$fontData = $defaultFontConfig['fontdata'];
$mpdf = new \Mpdf\Mpdf(
    ['tempDir' => __DIR__ . '/tmp',
        'fontdata' => $fontData + [
            'sarabun' => [
                'R' => 'THSarabunNew.ttf',
                'I' => 'THSarabunNewItalic.ttf',
                'B' =>  'THSarabunNewBold.ttf',
                'BI' => "THSarabunNewBoldItalic.ttf",
            ]
        ],
    ],
    ['mode' => 'utf-8', 'format' => [100, 136]]
);
$content = '<style>
body {
    font-family: sarabun;
}
table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

<div class="table-responsive">
                                    <table class="table display table-bordered table-striped no-wrap dataTable no-footer dtr-inline">
                                        <thead>
                                            <tr class="">
                                                <th colspan="9">     
                                                    <div class="row align-items-center">
                                                        <div class="pl-2">
                                                            <img src="../assets/images/theme/logo-light-icon.png" alt="homepage" class="light-logo" style="height: 80px;">
                                                        </div>
                                                        <div class="">
                                                            <span class="font-22">เจเอ็มเอฟ คาร์โก้</span> <br>
                                                            <span class="font-14 font-normal">11 ม.1 ต.หนองหอย อ.เมือง จ.เชียงใหม่ 50000</span> <br>
                                                            <span class="font-14 font-normal">โทร. 083-648-9981</span> 
                                                        </div>
                                                    </div> 
                                                </th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr class="text-center">
                                                <th colspan="9">     
                                                    <span class="font-20">ใบส่งสินค้า/ภาษาจีน</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr class="">
                                                <th colspan="5" rowspan="3" style="vertical-align: top;">
                                                    <div class="row mr-2 ml-2 align-items-center">                                                        
                                                        <div class="font-14 font-bold text-left">เรียน/Attention: <span class="font-14 font-normal"> F9999</span> 
                                                            <span class="font-14 font-normal"> คุณชินวัฒน์ ช่องลมกรด</span> 
                                                            <br>
                                                            <span class="font-14 font-normal"> 106 หมู่ 8 ตำบล เขาขาว อำเภอ ทุ่งสง จังหวัด นครศรีธรรมราช 80110</span> 
                                                        
                                                        </div> 
                                                        
                                                    </div>
                                                </th>
                                                <th class="text-right">
                                                    เลขที่/No. :
                                                </th>
                                                <th colspan="2">
                                                    <div class="row ml-0 mr-0">
                                                        <div class="col-6 text-left pl-0 pr-0">
                                                        61227
                                                        </div>
                                                        <div class="col-6 text-right pl-0 pr-0">
                                                        22.12.2019
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>  
                                                <th class="text-right">
                                                    วันที่ Date :
                                                </th>
                                                <th colspan="2">
                                                    22/12/2019 20:30 th
                                                </th>
                                            </tr>

                                            <tr>  
                                                <th class="text-right">
                                                    Tel :
                                                </th>
                                                <th colspan="2">
                                                    0966547127, 099554887
                                                </th>
                                            </tr>
                                            
                                        </thead>

                                        <thead>
                                            <tr>
                                                <th class="text-center">
                                                    ลำดับที่
                                                    <br>
                                                    ITEM
                                                </th>                                               
                                                <th class="text-center">
                                                    รายการ
                                                    <br>
                                                    DESCRIPTION
                                                </th>                                               
                                                <th class="text-center">
                                                    น้ำหนัก
                                                    <br>
                                                    KG
                                                </th>                                               
                                                <th class="text-center">
                                                    ปริมาตร
                                                    <br>
                                                    CBM
                                                </th>                                               
                                                <th class="text-center">
                                                    จำนวน
                                                    <br>
                                                    CH
                                                </th>                                                   
                                                <th class="text-center">
                                                    อัตราค่าขนส่ง
                                                    <br>
                                                    unit
                                                </th>                                                  
                                                <th class="text-center">
                                                    TOTAL
                                                    <br>
                                                    CH
                                                </th>                                               
                                                <th class="text-center">
                                                    ค่าขนส่งจีน
                                                    <br>
                                                    CH
                                                </th>  
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">1</td>                                               
                                                <td>106 หมู่ 8 ตำบล เขาขาว อำเภอ ทุ่งสง จังหวัด นครศรีธรรมราช 80110</td>                                               
                                                <td class="text-right">3</td>                                               
                                                <td class="text-right">4</td>                                               
                                                <td class="text-right">5</td>                                               
                                                <td class="text-right">6</td>                                               
                                                <td class="text-right">7</td>                                               
                                                <td class="text-right">8</td>                                               
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center">1</td>                                               
                                                <td>2</td>                                               
                                                <td class="text-right">3</td>                                               
                                                <td class="text-right">4</td>                                               
                                                <td class="text-right">5</td>                                               
                                                <td class="text-right">6</td>                                               
                                                <td class="text-right">7</td>                                               
                                                <td class="text-right">8</td>                                               
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center">1</td>                                               
                                                <td>2</td>                                               
                                                <td class="text-right">3</td>                                               
                                                <td class="text-right">4</td>                                               
                                                <td class="text-right">5</td>                                               
                                                <td class="text-right">6</td>                                               
                                                <td class="text-right">7</td>                                               
                                                <td class="text-right">8</td>                                               
                                                
                                            </tr>
                                            
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th colspan="2">หมายเหตุ Note.</th>
                                                <th class="text-right">80KG</th>
                                                <th class="text-right">99CBM</th>
                                                <th class="text-right">5BOX</th>
                                                <th></th>
                                                <th>ค่าส่งในประเทศ</th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th colspan="6"></th>
                                                <th>ส่วนลด</th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th colspan="6"></th>
                                                <th>รวมทั้งหมด</th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <th colspan="3">ผู้รับสินค้า :</th>
                                                <th colspan="3">ผู้ส่งสินค้า :</th>
                                                <th colspan="2">ผู้ตรวจสอบ :</th>
                                            </tr>

                                            <tr>
                                                <th colspan="3">วันที่ Date :</th>
                                                <th colspan="3">วันที่ Date :</th>
                                                <th colspan="2"></th>
                                            </tr>
                                        </tfoot>

                                    </table>
                            </div>';

$mpdf->AddPage('L'); // เพิ่มหน้าใหม่แบบแนวนอน

$mpdf->WriteHTML($content);
$mpdf->Output();
?>