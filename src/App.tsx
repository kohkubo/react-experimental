import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const FlexShrinkDemo = () => {
  const [containerWidth, setContainerWidth] = useState(100);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Flex Shrink Demo</h1>

      <div className="space-y-2">
        <label htmlFor="width-slider" className="block text-sm font-medium">
          Container Width: {containerWidth}%
        </label>
        <Slider
          id="width-slider"
          min={20}
          max={100}
          step={1}
          value={[containerWidth]}
          onValueChange={(value: number[]) => setContainerWidth(value[0])}
        />
      </div>

      <div
        className="border border-gray-300 p-2 overflow-x-auto"
        style={{ width: `${containerWidth}%` }}
      >
        <div className="flex space-x-2 w-full h-full">
          <div className="flex-shrink-0 w-40 h-full bg-blue-500 flex items-center justify-center text-white">
            Fixed 160px
          </div>
          <div className="w-40 h-20 bg-green-500 flex items-center justify-center text-white">
            Shrinkable 160px
          </div>
          <div className="w-40 h-20 bg-red-500 flex items-center justify-center text-white">
            Shrinkable 160px
          </div>
          <div className="flex-shrink-0 w-40 h-20 bg-yellow-500 flex items-center justify-center text-white">
            Fixed 160px
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">説明:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>青と黄色のボックス: <code>flex-shrink-0</code>が適用されており、縮小しません。</li>
          <li>緑と赤のボックス: デフォルトで<code>flex-shrink</code>が適用されており、必要に応じて縮小します。</li>
          <li>スライダーでコンテナの幅を調整すると、shrinkの挙動が確認できます。</li>
          <li>コンテナが狭くなると、緑と赤のボックスが縮小し、負の余白が発生したように見えます。</li>
        </ul>
      </div>
    </div>
  );
};

export default FlexShrinkDemo;
