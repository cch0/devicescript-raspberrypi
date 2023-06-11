import { Temperature } from "@devicescript/core"

const thermometer = new Temperature()
thermometer.reading.subscribe(t => {
    console.data({ t })
})