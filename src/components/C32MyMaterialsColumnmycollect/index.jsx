import React from "react";
import { Input, Img, Text, Button } from "./..";

export default function C32MyMaterialsColumnmycollect({
  mycollections = "My Collections",
  collectioncount = "Collection 1",
  collectioncount1 = "Collection 2",
  collectioncount2 = "Collection 3",
  collectioncount3 = "Collection 4",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex gap-2 self-stretch">
        <div className="flex p-1.5">
          <Text size="s" as="p" className="ml-[3px] self-end md:ml-0">
            {mycollections}
          </Text>
        </div>
        <Button size="md" shape="round" className="w-[32px]">
          <Img src="images/img_arrow_down.svg" />
        </Button>
      </div>
      <div className="flex flex-col gap-1.5 self-stretch">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-1 items-center justify-between gap-5 rounded-[10px] p-[7px]">
            <div className="flex items-center gap-1">
              <Img src="images/img_icon_map.svg" alt="collection_one" className="h-[12px] w-[12px]" />
              <Text size="s" as="p">
                {collectioncount}
              </Text>
            </div>
            <Img src="images/img_arrow_down.svg" alt="collection_one" className="h-[12px] w-[12px]" />
          </div>
          <div className="flex flex-1 items-center justify-between gap-5 rounded-[10px] p-[7px]">
            <div className="flex items-center gap-1">
              <Img src="images/img_icon_map.svg" alt="iconsmap_one" className="h-[12px] w-[12px]" />
              <Text size="s" as="p">
                {collectioncount1}
              </Text>
            </div>
            <Img src="images/img_arrow_down.svg" alt="iconsmap_three" className="h-[12px] w-[12px]" />
          </div>
          <div className="flex flex-1 items-center justify-between gap-5 rounded-[10px] p-[7px]">
            <div className="flex items-center gap-1">
              <Img src="images/img_icon_map.svg" alt="iconsmap_one" className="h-[12px] w-[12px]" />
              <Text size="s" as="p">
                {collectioncount2}
              </Text>
            </div>
            <Img src="images/img_arrow_down.svg" alt="iconsmap_three" className="h-[12px] w-[12px]" />
          </div>
          <div className="flex flex-1 items-center justify-between gap-5 rounded-[10px] p-[7px]">
            <div className="flex items-center gap-1">
              <Img src="images/img_icon_map.svg" alt="iconsmap_one" className="h-[12px] w-[12px]" />
              <Text size="s" as="p">
                {collectioncount3}
              </Text>
            </div>
            <Img src="images/img_arrow_down.svg" alt="iconsmap_three" className="h-[12px] w-[12px]" />
          </div>
        </div>
        <Input
          shape="square"
          name="icons_map"
          placeholder={`New Collection`}
          prefix={<Img src="images/img_icons_map.svg" alt="Icons Map" className="h-[12px] w-[12px]" />}
          className="sm:pr-5"
        />
      </div>
    </div>
  );
}
