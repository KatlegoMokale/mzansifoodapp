import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {
    const [activeCategory, SetActiveCategory] = useState(null);
  return (
    <View className="mt-4">
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
            paddingHorizontal:15
        }}>
            {
                categories.map((category, index)=>{
                    let isActive = category.id==activeCategory;
                    let btnClass = isActive? ' bg-gray-100 ': ' ';
                    let textClass = isActive? ' font-semibold text-gray-800': ' text-gray-500';
                    return(
                        <View key={index}
                        className="flex justify-center items-center mr-6 ">
                            <TouchableOpacity 
                                onPress={()=> SetActiveCategory(category.id)}
                                className={"p-1 rounded-full shadow items-center" + btnClass}>
                                <Image style={{width:45, height:45}}
                                    source={category.image} />
                                <Text className={"text-sm text-center" + textClass}>{category.name}</Text>
                            </TouchableOpacity>

                        </View>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}