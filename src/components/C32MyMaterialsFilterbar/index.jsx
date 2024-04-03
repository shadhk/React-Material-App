import React from "react"
import { Text } from "./.."

export default function C32MyMaterialsFilterbar({ mycollections = "My Collections", introducing = "Introducing collections: the ability to organise your materials, your way. ", search = "Showing 118 Results", ...props }) {
  return (
    <div {...props}>
      <div className="flex w-[32%] flex-col items-start gap-[30px]">
        <Text
          size="lg"
          as="p"
          className="tracking-[-0.72px]"
        >
          {mycollections}
        </Text>
        <Text
          as="p"
          className="leading-[125%]"
        >
          {introducing}
        </Text>
      </div>
      <div className="flex self-center px-[400px] md:px-5">
        <div className="flex rounded-[10px] py-1.5">
          <Text
            size="s"
            as="p"
            className="self-end !text-gray-600"
          >
            {search}
          </Text>
        </div>
      </div>
    </div>
  )
}
