import React from "react"
import { Helmet } from "react-helmet"
import { Button, Img, Text } from "../../components"
import C32MyMaterialsColumnmycollect from "../../components/C32MyMaterialsColumnmycollect"
import C32MyMaterialsFilterbar from "../../components/C32MyMaterialsFilterbar"

export default function MyMaterialsPage() {
  return (
    <>
      <Helmet>
        <title>Material Product Page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-6 bg-gray-50">
        <header className="flex items-center justify-center border-b border-solid border-blue_gray-100 bg-white-A700 p-6 sm:p-5">
          <div className="mx-auto flex w-full max-w-[1368px] justify-center">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <Img
                src="images/img_close.svg"
                alt="close_one"
                className="h-[30px] w-[30px] md:w-full"
              />
              <div className="flex items-center pl-3 sm:flex-col">
                <a
                  href="Materials"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[5px] self-start"
                >
                  <Text
                    size="md"
                    as="p"
                  >
                    Materials
                  </Text>
                </a>
                <a
                  href="Elements"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-8 mt-[5px] self-start sm:ml-0"
                >
                  <Text
                    size="md"
                    as="p"
                  >
                    Elements
                  </Text>
                </a>
                <a
                  href="projects"
                  className="ml-5 rounded-[10px] px-3 py-1.5 sm:ml-0"
                >
                  <Text
                    size="md"
                    as="p"
                  >
                    Projects
                  </Text>
                </a>
                <a
                  href="manufacturers"
                  className="ml-2 rounded-[10px] px-3 py-1.5 sm:ml-0"
                >
                  <Text
                    size="md"
                    as="p"
                  >
                    Manufacturers
                  </Text>
                </a>
                <Button
                  size="lg"
                  shape="round"
                  className="ml-2 min-w-[110px] font-medium !text-deep_purple-500 sm:ml-0"
                >
                  Collections
                </Button>
              </div>
              <Img
                src="images/img_header_profile.png"
                alt="headerprofile"
                className="h-[32px] w-[32px] rounded-[50%]"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-5 mx-9">
          <div className="mx-auto flex w-full max-w-[1368px] items-start gap-5 md:flex-col md:p-5">
            <C32MyMaterialsColumnmycollect className="flex w-[19%] flex-col gap-4 rounded-[12px] border border-solid border-blue_gray-100 bg-white-A700 p-4 shadow-xs md:w-full" />
            <div className="flex flex-1 flex-col gap-5 pb-[303px] md:self-stretch md:pb-5">
              <C32MyMaterialsFilterbar className="flex flex-col items-start gap-[7px] border-b border-solid border-blue_gray-100 pb-1.5" />
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(314px_,_1fr))] justify-center gap-5">
                <div className="flex w-full flex-col gap-[15px] rounded-[12px] border border-solid border-blue_gray-100 bg-white-A700 p-[19px]">
                  <div className="flex justify-between gap-5">
                    <Button
                      shape="round"
                      rightIcon={
                        <Img
                          src="images/img_iconmap_blue_gray_900.svg"
                          alt="Icon_Map"
                          className="h-[12px] w-[12px]"
                        />
                      }
                      className="min-w-[129px] gap-1"
                    >
                      Download data
                    </Button>
                    <div className="flex items-center">
                      <div className="flex items-center gap-1 rounded-[10px]">
                        <Text
                          as="p"
                          className="h-[16px]"
                        >
                          87
                        </Text>
                        <Img
                          src="images/img_user.svg"
                          alt="image"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                      <Button
                        size="xs"
                        className="w-[24px] rounded-md"
                      >
                        <Img src="images/img_icon_map_blue_gray_900_1.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text
                      size="md"
                      as="p"
                    >
                      My Collection
                    </Text>
                    <Text
                      as="p"
                      className="leading-[125%]"
                    >
                      Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[15px] rounded-[12px] border border-solid border-blue_gray-100 bg-white-A700 p-[19px]">
                  <div className="flex justify-between gap-5">
                    <Button
                      shape="round"
                      rightIcon={
                        <Img
                          src="images/img_iconmap_blue_gray_900.svg"
                          alt="Icon_Map"
                          className="h-[12px] w-[12px]"
                        />
                      }
                      className="min-w-[129px] gap-1"
                    >
                      Download data
                    </Button>
                    <div className="flex items-center">
                      <div className="flex items-center gap-1 rounded-[10px]">
                        <Text
                          as="p"
                          className="h-[16px]"
                        >
                          87
                        </Text>
                        <Img
                          src="images/img_user.svg"
                          alt="user_one"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                      <Button
                        size="xs"
                        className="w-[24px] rounded-md"
                      >
                        <Img src="images/img_icon_map_blue_gray_900_1.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text
                      size="md"
                      as="p"
                    >
                      My Collection
                    </Text>
                    <Text
                      as="p"
                      className="leading-[125%]"
                    >
                      Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[15px] rounded-[12px] border border-solid border-blue_gray-100 bg-white-A700 p-[19px]">
                  <div className="flex justify-between gap-5">
                    <Button
                      shape="round"
                      rightIcon={
                        <Img
                          src="images/img_iconmap_blue_gray_900.svg"
                          alt="Icon_Map"
                          className="h-[12px] w-[12px]"
                        />
                      }
                      className="min-w-[129px] gap-1"
                    >
                      Download data
                    </Button>
                    <div className="flex items-center">
                      <div className="flex items-center gap-1 rounded-[10px]">
                        <Text
                          as="p"
                          className="h-[16px]"
                        >
                          87
                        </Text>
                        <Img
                          src="images/img_user.svg"
                          alt="user_one"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                      <Button
                        size="xs"
                        className="w-[24px] rounded-md"
                      >
                        <Img src="images/img_icon_map_blue_gray_900_1.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text
                      size="md"
                      as="p"
                    >
                      My Collection
                    </Text>
                    <Text
                      as="p"
                      className="leading-[125%]"
                    >
                      Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[15px] rounded-[12px] border border-solid border-blue_gray-100 bg-white-A700 p-[19px]">
                  <div className="flex justify-between gap-5">
                    <Button
                      shape="round"
                      rightIcon={
                        <Img
                          src="images/img_iconmap_blue_gray_900.svg"
                          alt="Icon_Map"
                          className="h-[12px] w-[12px]"
                        />
                      }
                      className="min-w-[129px] gap-1"
                    >
                      Download data
                    </Button>
                    <div className="flex items-center">
                      <div className="flex items-center gap-1 rounded-[10px]">
                        <Text
                          as="p"
                          className="h-[16px]"
                        >
                          87
                        </Text>
                        <Img
                          src="images/img_user.svg"
                          alt="user_one"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                      <Button
                        size="xs"
                        className="w-[24px] rounded-md"
                      >
                        <Img src="images/img_icon_map_blue_gray_900_1.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text
                      size="md"
                      as="p"
                    >
                      My Collection
                    </Text>
                    <Text
                      as="p"
                      className="leading-[125%]"
                    >
                      Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full justify-center rounded-[12px] border border-solid border-blue_gray-100 bg-gray-200 p-[54px] md:p-5">
                  <Button
                    color="gray_300"
                    size="xl"
                    shape="circle"
                    className="w-[48px] !rounded-[24px]"
                  >
                    <Img src="images/img_icons_map_blue_gray_900.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex rounded-tl-[20px] rounded-tr-[20px] border-l border-r border-t border-solid border-blue_gray-100 bg-white-A700_e5 p-5 shadow-sm">
            <div className="mx-auto flex w-full max-w-[1370px] justify-center">
              <div className="flex">
                <Button
                  size="lg"
                  shape="round"
                  className="min-w-[147px] font-medium"
                >
                  Compare Materials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
