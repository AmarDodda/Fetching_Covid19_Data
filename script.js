async function foo(){
    var res=await fetch("https://data.covid19india.org/v4/min/data.min.json");
    var resdata=await res.json();
    var total_AP_data=resdata.AP.total;
    console.log(total_AP_data)

    var div=document.createElement("div");
    div.className="main"
    div.innerHTML=`<div class="card border-primary mb-3 main1">
    <div class="card-header">Covid-19 Data</div>
    <div class="card-body text-primary">
      <h5 class="card-title">Andhra Pradesh</h5>
      <p class="card-text">Confirmed:${total_AP_data.confirmed}</p>
      <p class="card-text">Deceased:${total_AP_data.deceased}</p>
      <p class="card-text">Recovered:${total_AP_data.recovered}</p>
      <p class="card-text">Tested:${total_AP_data.tested}</p>
      <p class="card-text">Vaccinated1:${total_AP_data.vaccinated1}</p>
      <p class="card-text">Vaccinated2:${total_AP_data.vaccinated2}</p>
    </div>`

    document.body.append(div);
}



foo()