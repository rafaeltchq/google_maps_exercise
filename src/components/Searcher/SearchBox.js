import React from "react";
import { useDispatch } from 'react-redux';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

function SearchBox({ panTo }) {

  const dispatch = useDispatch();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 41.385251760995985,
        lng: () => 2.1689619107290565,
      },
      radius: 200000,
    },
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="searchbox">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            dispatch({type: "NEW_MARKER", payLoad: {lat: lat, lng: lng}})
            panTo({ lat, lng });
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Buscar..."
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default SearchBox;
