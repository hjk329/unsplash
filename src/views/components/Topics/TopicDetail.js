import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import {IconContributions, IconCurator, IconStatus, IconTopContributors} from "../../../icons";
import {Button} from "../shared/Button/Button.Styled";
import {FormatThousandNum} from "../../../lib/common";


const TopicDetail = ({data = []}) => {

    if (_.isEmpty(data)) return null;

    const renderAvatar = (items = [], size) => {
        return items.map((item) => (
            <Avatar className={size}>
                <img src={item.profile_image.small} alt=""/>
            </Avatar>
        ))
    }

    const detailItem = [
        {
            icon: <IconStatus/>,
            label: 'Status',
            content: <StatusLabel className={data.status}>{data.status}</StatusLabel>
        },
        {
            icon: <IconCurator/>,
            label: 'Curator',
            content: renderAvatar(data.owners, 'md')
        }
        ,
        {
            icon: <IconContributions/>,
            label: 'Contributions',
            content: FormatThousandNum(data.total_photos)
        },
        {
            icon: <IconTopContributors/>,
            label: 'Top contributors',
            content: renderAvatar(data.top_contributors, 'sm')
        },

    ]

    return (
        <Container>
            <Text>
                <h1>{data?.title}</h1>
                <p dangerouslySetInnerHTML={{__html: data?.description}}/>
            </Text>

            <DetailBox>
                <Detail>
                    {
                        detailItem.map((item) => (
                            <DetailItem>
                                <div className="icon">{item.icon}</div>
                                <div className="label">{item.label}</div>
                                <div className="content">
                                    {item.content}
                                </div>
                            </DetailItem>
                        ))
                    }


                </Detail>
                <StyledButton>
                    Submit to {data.title}
                </StyledButton>
            </DetailBox>


        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 10px 30px;

`;

const Text = styled.div`
  margin: 40px 0 30px;
  flex: 1;

  h1 {
    font-size: 46px;
    color: #111;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #111;
    line-height: 28.8px;
    max-width: 620px;
  }

  a {
    color: #767676;
    text-decoration: underline;
  }
`;

const DetailBox = styled.div`
  margin: 30px 0;
`;

const Detail = styled.div`
  width: 416px;
  padding: 24px;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  color: #111;
  font-size: 14px;
  font-weight: 400;
  height: 48px;
  border-bottom: 1px solid #d1d1d1;

  &:last-child {
    border-bottom: none;
  }

  .icon {
    svg {
      fill: #d1d1d1;
      width: 18px;
      height: 18px;
      margin-right: 14px;
    }
  }

  .label {
    width: 160px;
  }

  .content {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
  }
`;

const Avatar = styled.a`
  margin-left: 4px;

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;
  }

  &.sm {
    img {
      width: 16px;
      height: 16px;
    }
  }

  &.md {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const StatusLabel = styled.div`
  background: #c2ebd3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-transform: capitalize;
  border-radius: 4px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #3cb46e;
    margin-right: 8px;
    border-radius: 50%;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  background: #111;
  color: #fff;
  padding: 0 16px;
  font-size: 15px;
  line-height: 42px;
  white-space: nowrap;
  border-radius: 4px;
`;
export default TopicDetail;