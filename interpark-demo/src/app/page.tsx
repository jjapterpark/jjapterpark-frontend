"use client";

import tw from "tailwind-styled-components";

const Contents = tw.div`
    container
    w-[1280px]
    mx-auto
`;

const ProductWrapper = tw.div`
    relative
    flex
    justify-between
`;

const ProductMain = tw.div`
    w-[830px]
    mt-[20px]
    mb-[98px]
    ml-[20px]
`;

const ProductSide = tw.div`
    relative
    w-[370px]
    mt-[40px]
    pb-[10px]
`;

const ProductMainTop = tw.div`
`;

const Summary = tw.div`
    relative
    pb-[65px]
   
`;

const SummaryTop = tw.div`
    mt-[4px]
    mb-[24px]
`;

const PrdTitle = tw.h2`
    line-clamp-2
    text-ellipsis
    text-[#222]
    text-[26px]
    not-italic
    font-bold
`;

const Tag = tw.div`
    inline-block
    mb-[9px]
    w-full
    text-[#666]
    
`;

const TagList = tw.div`
    inline-block
    mr-[11px]
    align-middle
`;

const TagItem = tw.div`
    first: ml-0
    inline-block
`;

const TagButton = tw.div`
    cursor-pointer
    inline-block
    min-w-[67px]
    h-[24px]
    py-0
    px-[6px]
    text-[12px]
    leading-[22px]
    align-middle
    border-[1px]
    border-solid
    border-[#ddd]
    rounded-[4px]
    box-border

    
`;

const PrdSection = tw.div`
    flex
    flex-row
    items-center
    mt-[12px]
    text-[#666]
`;

const TagText = tw.div`
    inline-block
    text-[14px]
    align-middle
`;

export default function Home() {
    return (
        <Contents>
            <ProductWrapper>
                <ProductMain>
                    <ProductMainTop>
                        <Summary>
                            <SummaryTop>
                                <Tag>
                                    <TagList>
                                        <TagItem>
                                            <TagButton>asdf</TagButton>
                                        </TagItem>
                                        <TagItem></TagItem>
                                    </TagList>
                                </Tag>
                                <PrdTitle>싸이흠뻑쇼 SUMMERSWAG2024 - 과천</PrdTitle>
                                <PrdSection>
                                    <TagText>
                                        <span>콘서트</span>
                                        <span>주간 4위</span>
                                    </TagText>
                                </PrdSection>
                            </SummaryTop>
                            <div>Body</div>
                        </Summary>
                    </ProductMainTop>
                </ProductMain>
                <ProductSide></ProductSide>
            </ProductWrapper>
        </Contents>
    );
}
