/* 

calcAverageCalories(days) adlı bir fonksiyon yaz, bu fonksiyon hafta boyunca sporcu tarafından tüketilen kalori miktarının günlük ortalama değerini döndürür. 

Fonksiyon tek bir parametre bekler: days — bir dizi obje.

Her obje, sporcu tarafından o gün tüketilen kalori miktarını açıklayan gün ve calories özelliklerine sahiptir. 

Fonksiyonun doğru çalışıp çalışmadığını kontrol etmek için aşağıdaki kodu, fonksiyon tanımından hemen sonra yapıştır. Sonuçlar konsola yazdırılacaktır.

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

*/

function calcAverageCalories(days){

    let daysLength = days.length;
    let totalCalories = 0;

    if(daysLength==0){
        return 0;
    }

    for (const day of days) {
        totalCalories += day.calories;      
    }

    return totalCalories / daysLength;

    
 }


console.log(calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); // 2270
  
  console.log(
    calcAverageCalories([])
  ); // 0
  

