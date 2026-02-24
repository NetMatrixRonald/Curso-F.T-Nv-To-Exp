import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Brain, Eye, Gauge, Heart, Shield, Zap } from 'lucide-react'

import React, { type PropsWithChildren } from 'react'

type Status = 'Active' | 'Inactive'

type Universe = 'Marvel' | 'DC' | 'Other'

interface Props extends PropsWithChildren {
    img: React.ReactNode
    statusIndicator: Status,
    universeBadge: Universe,
    heroName: string,
    realName: string,
    typeHero: string,
    verse: string,
    descriptionHero: string,
    valueStrength: number,
    valueIntelligence: number,
    valueSpeed: number,
    valueDurability: number,
    powers: string[]

}


const HeroGridCard = ({ img, statusIndicator, universeBadge, heroName, realName, typeHero, verse, descriptionHero, valueStrength, valueIntelligence, valueSpeed, valueDurability }: Props) => {
    return (
        <>


            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
                <div className="relative h-64 overflow-hidden">
                    {img}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${statusIndicator === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
                        <Badge variant="secondary" className="text-xs bg-white/90 text-gray-700">
                            {statusIndicator}
                        </Badge>
                    </div>
                    <Badge className={`absolute top-3 right-3 text-xs ${universeBadge === 'Marvel' ? 'bg-red-600' : universeBadge === 'DC' ? 'bg-blue-600' : 'bg-gray-600'} text-white`}>{universeBadge}</Badge>


                    <Button size="sm" variant="ghost" className="absolute bottom-3 right-3 bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>


                    <Button
                        size="sm"
                        variant="ghost"
                        className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Eye className="h-4 w-4 text-gray-600" />
                    </Button>
                </div>


                <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg leading-tight">{heroName}</h3>
                            <p className="text-sm text-gray-600">{realName}</p>
                        </div>
                        <Badge className="text-xs bg-green-100 text-green-800 border-green-200">{typeHero}</Badge>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs">
                        {verse}
                    </Badge>
                </CardHeader>


                <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {descriptionHero}
                    </p>


                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <div className="flex items-center gap-1">
                                <Zap className="h-3 w-3 text-orange-500" />
                                <span className="text-xs font-medium">Strength</span>
                            </div>
                            <Progress value={valueStrength} activeColor="bg-orange-500" className="h-2" />
                        </div>


                        <div className="space-y-1">
                            <div className="flex items-center gap-1">
                                <Brain className="h-3 w-3 text-blue-500" />
                                <span className="text-xs font-medium">Intelligence</span>
                            </div>
                            <Progress value={valueIntelligence} activeColor="bg-blue-500" className="h-2" />
                        </div>


                        <div className="space-y-1">
                            <div className="flex items-center gap-1">
                                <Gauge className="h-3 w-3 text-green-500" />
                                <span className="text-xs font-medium">Speed</span>
                            </div>
                            <Progress value={valueSpeed} activeColor="bg-green-500" className="h-2" />
                        </div>


                        <div className="space-y-1">
                            <div className="flex items-center gap-1">
                                <Shield className="h-3 w-3 text-purple-500" />
                                <span className="text-xs font-medium">Durability</span>
                            </div>
                            <Progress value={valueDurability} activeColor="bg-purple-500" className="h-2" />
                        </div>
                    </div>


                    {/* Powers */}
                    <div className="space-y-2">
                        <h4 className="font-medium text-sm">Powers:</h4>
                        <div className="flex flex-wrap gap-1">
                            <Badge variant="outline" className="text-xs">
                                Super Strength
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                                Flight
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-gray-100">
                                +4 more
                            </Badge>
                        </div>
                    </div>

                    <div className="text-xs text-gray-500 pt-2 border-t">First appeared: 1938</div>
                </CardContent>
            </Card>


        </>
    )
}

export default HeroGridCard
