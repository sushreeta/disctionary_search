import { FC } from "react";
import { TypographyCustom } from "../index.components";
import { isObjectEmpty } from "../../utils/validations";

interface PropsDto {
  listData: ObjectDto;
}

interface DefinationDto {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

interface GetDefinationDto {
  definitions: DefinationDto[];
}

interface RenderTextDto {
  dataArray: ObjectDto;
  keyName?: string | any;
  title?: string;
}

type ObjectDto = Record<string | number, any>;

export const ListView: FC<PropsDto> = ({ listData }) => {
  if (isObjectEmpty(listData)) {
    return null;
  }
  return (
    <div
      style={{
        margin: 20,
      }}
    >
      <TypographyCustom
        key={`meaning`}
        type={"body1"}
        title={`Meaning:`}
        customStyle={{}}
      />
      {listData?.map(listItem)}
    </div>
  );
};

// for go through diffrerent definations list
const listItem = (item: ObjectDto, index: number) => {
  const { meanings } = item;
  return (
    <>
      {meanings.map((item: ObjectDto, index: number) => {
        const { definitions, sourceUrls } = item;
        return (
          <div
            style={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {index > 0 && (
              <div
                style={{
                  width: 200,
                  height: 2,
                  background: "black",
                  margin: 12,
                }}
              />
            )}
            {sourceUrls?.length > 0 && (
              <TypographyCustom
                key={`defination_${index}`}
                type={"body1"}
                title={`Source: ${sourceUrls[0]}`}
                customStyle={{}}
              />
            )}
            <GetDefinitation definitions={definitions} />
          </div>
        );
      })}
    </>
  );
};

// For showing the meaning
const GetDefinitation: FC<GetDefinationDto> = ({ definitions }) => {
  return (
    <>
      {definitions.map((item: DefinationDto, index: number) => {
        const { definition, synonyms, antonyms } = item;
        return (
          <>
            <TypographyCustom
              type={"body1"}
              title={definition.trim()}
              customStyle={{}}
            />
            <RenderText dataArray={synonyms} title={"Synonyms"} />
            <RenderText dataArray={antonyms} title={"Antonyms"} />
          </>
        );
      })}
    </>
  );
};

// For Synonyms & Antonyms
const RenderText: FC<RenderTextDto> = ({
  dataArray,
  keyName = "",
  title = "",
}) => {
  if (dataArray?.length === 0) {
    return null;
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <TypographyCustom
        key={`title_${keyName}`}
        type={"body1"}
        title={title}
        customStyle={{}}
      />
      {dataArray.map((item: ObjectDto | string, index: number) => {
        if (item.length > 0) {
          return (
            <TypographyCustom
              key={`${index}_${String(item)}`}
              type={"body1"}
              title={`${item[keyName] ?? item}${
                index !== item.length - 1 ? "," : ""
              }`}
              customStyle={{}}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
