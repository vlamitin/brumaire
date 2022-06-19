const vendemiare_en = {
    name: 'Vendémiaire',
    season: 'Autumn',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Vend%C3%A9miaire_commence_le_22_septembre.jpg',
    days: [
        { date: '22-09', name: 'Grape' },
        { date: '23-09', name: 'Saffron' },
        { date: '24-09', name: 'Chestnut' },
        { date: '25-09', name: 'Autumn Crocus' },
        { date: '26-09', name: 'Horse' },
        { date: '27-09', name: 'Impatiens' },
        { date: '28-09', name: 'Carrot' },
        { date: '29-09', name: 'Amaranth' },
        { date: '30-09', name: 'Parsnip' },
        { date: '01-10', name: 'Vat' },
        { date: '02-10', name: 'Potato' },
        { date: '03-10', name: 'Strawflower' },
        { date: '04-10', name: 'Winter squash' },
        { date: '05-10', name: 'Mignonette' },
        { date: '06-10', name: 'Donkey' },
        { date: '07-10', name: 'Four o\'clock flower' },
        { date: '08-10', name: 'Pumpkin' },
        { date: '09-10', name: 'Buckwheat' },
        { date: '10-10', name: 'Sunflower' },
        { date: '11-10', name: 'Wine-Press' },
        { date: '12-10', name: 'Hemp' },
        { date: '13-10', name: 'Peach' },
        { date: '14-10', name: 'Turnip' },
        { date: '15-10', name: 'Amaryllis' },
        { date: '16-10', name: 'Ox' },
        { date: '17-10', name: 'Eggplant' },
        { date: '18-10', name: 'Chili pepper' },
        { date: '19-10', name: 'Tomato' },
        { date: '20-10', name: 'Barley' },
        { date: '21-10', name: 'Barrel' },
    ]
}

const brumaire_en = {
    name: 'Brumaire',
    season: 'Autumn',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Brumaire_commence_le_23_octobre.jpg',
    days: [
        { date: '22-10', name: 'Apple' },
        { date: '23-10', name: 'Celery' },
        { date: '24-10', name: 'Pear' },
        { date: '25-10', name: 'Beetroot' },
        { date: '26-10', name: 'Goose' },
        { date: '27-10', name: 'Heliotrope' },
        { date: '28-10', name: 'Common fig' },
        { date: '29-10', name: 'Black Salsify' },
        { date: '30-10', name: 'Chequer Tree' },
        { date: '31-10', name: 'Plough' },
        { date: '01-11', name: 'Salsify' },
        { date: '02-11', name: 'Water caltrop' },
        { date: '03-11', name: 'Jerusalem artichoke' },
        { date: '04-11', name: 'Endive' },
        { date: '05-11', name: 'Turkey' },
        { date: '06-11', name: 'Skirret' },
        { date: '07-11', name: 'Watercress' },
        { date: '08-11', name: 'Leadworts' },
        { date: '09-11', name: 'Pomegranate' },
        { date: '10-11', name: 'Harrow' },
        { date: '11-11', name: 'Baccharis' },
        { date: '12-11', name: 'Azarole' },
        { date: '13-11', name: 'Madder' },
        { date: '14-11', name: 'Orange' },
        { date: '15-11', name: 'Pheasant' },
        { date: '16-11', name: 'Pistachio Nut' },
        { date: '17-11', name: 'Tuberous pea' },
        { date: '18-11', name: 'Quince' },
        { date: '19-11', name: 'Service tree' },
        { date: '20-11', name: 'Roller' },
    ],
}

const months_en = [vendemiare_en, brumaire_en]

const dates_en = {}
months_en.forEach(month => {
    month.days.forEach((day, index) => {
        dates_en[day.date] = {
            month,
            dayNumber: index + 1,
            name: day.name,
        }
    })
})

window.onload = function () {
    const dateInput = document.querySelector('#date')
    const contentDiv = document.querySelector('#content')
    dateInput.addEventListener('change', (e) => {
        console.log('tar', e.target.value)
        const [_, month, date] = e.target.value.split('-')
        const day = dates_en[`${date}-${month}`]
        if (!day) {
            alert('no date found!')
            return
        }

        contentDiv.innerHTML = `<div>
    <h2>Date: ${day.dayNumber} of ${day.month.name} (${day.name})</h2>
    <div>
        <p>Season: ${day.month.season}</p>
        <img src="${day.month.img}" alt="month_${day.month.name}">
    </div>
</div>`
    })
}
