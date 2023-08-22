import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';


export default function PinnedProjects() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Pinned Projects</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <Link href="/project/1">
              <div className="relative block cursor-pointer border border-gray-300 rounded-lg overflow-hidden">
                <Card>
                  <div className="relative h-0" style={{ paddingBottom: '66.67%' }}>
                    <Image
                      src="/images/card-background-1.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="Card background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <CardTitle>Card 1</CardTitle>
                    <p className="text-gray-500">Card content goes here</p>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <Link href="/project/2">
              <div className="relative block cursor-pointer border border-gray-300 rounded-lg overflow-hidden">
                <Card>
                  <div className="relative h-0" style={{ paddingBottom: '66.67%' }}>
                    <Image
                      src="/images/card-background-2.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="Card background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <CardTitle>Card 2</CardTitle>
                    <p className="text-gray-500">Card content goes here</p>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <Link href="/project/3">
              <div className="relative block cursor-pointer border border-gray-300 rounded-lg overflow-hidden">
                <Card>
                  <div className="relative h-0" style={{ paddingBottom: '66.67%' }}>
                    <Image
                      src="/images/card-background-3.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="Card background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <CardTitle>Card 3</CardTitle>
                    <p className="text-gray-500">Card content goes here</p>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
        </div>

        </div>
    )
};