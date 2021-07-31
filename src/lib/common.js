import _ from 'lodash'

export const FormatThousandNum = (num) => {
    if(!_.isNumber(num) || num < 1000) return num;
    return (num / 1000).toFixed(1) + "k"
}

export const makePhotosGroup = (data) => {
    let result = [[], [], []]
    let groupHeight = [0, 0, 0]

    for(let i = 0; i < data.length; i++) {

        const minGroupHeight = Math.min(...groupHeight)
        const minGroupHeightIndex = groupHeight.indexOf(minGroupHeight)

        result[minGroupHeightIndex].push(data[i])
        groupHeight[minGroupHeightIndex] = groupHeight[minGroupHeightIndex] + data[i].height / data[i].width
    }
    return result
}