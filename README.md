## How to update the phone rates

1. Get new rates from Gordon in excel format
2. Export to csv or json if you can
3. Import the data and format as follows:
    ```js
    export const rates = [
      {name: "NAME 1", five: 666, ten: 666, twenty: 666},
      {name: "NAME 2", five: 666, ten: 666, twenty: 666}
    ]
    ```
4. Replace the file `./rates.tsx`
5. `run npm build`
6. `run npm deploy`
