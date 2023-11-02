(() => {
  interface CityDropdown {
    value: string;
    selected: boolean;
  }

  interface ZipcodeDropdown {
    value: number;
    selected: boolean;
  }

  function createDropdown(list: CityDropdown[]): string {
    let result = "<select>";
    list.forEach((item) => {
      result += `<option ${item.selected ? "selected" : ""}>${
        item.value
      }</option>`;
    });
    result += "<select/>";

    return result;
  }

  function createDropdown2(list: ZipcodeDropdown[]): string {
    let result = "<select>";
    list.forEach((item) => {
      result += `<option ${item.selected ? "selected" : ""}>${
        item.value
      }</option>`;
    });
    result += "<select/>";

    return result;
  }

  var cityList: CityDropdown[] = [
    {
      value: "서울시",
      selected: false,
    },
    {
      value: "인천광역시",
      selected: false,
    },
    {
      value: "광주시",
      selected: false,
    },
  ];

  const cityTag = createDropdown(cityList);
  console.log(cityTag);

  var zipcodeList: ZipcodeDropdown[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: false },
    { value: 56789, selected: true },
  ];
})();
