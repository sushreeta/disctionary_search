import { FC, useState } from "react";
import { ListView, SearchBar } from "../../components/index.components";
import { makeApiCall } from "../../utils/index.utils";

export const DictionarySearch: FC<any> = () => {
  const [data, setData] = useState({});

  const onSearchApi = async ({ value = "" }) => {
    const { data } = await makeApiCall({
      endPoint: `${value}`,
      method: "GET",
    });
    setData(data);
  };

  return (
    <div style={{ paddingTop: 20 }}>
      {/* Search */}
      <div
        style={{
          background: "white",
          margin: 20,
          padding: 20,
          borderRadius: 8,
          display: "flex",
          alignItems: "flex-start",
          minWidth: 280,
        }}
      >
        <SearchBar onSearch={onSearchApi} />
      </div>

      {/* List item */}
      <ListView listData={data} />
    </div>
  );
};
