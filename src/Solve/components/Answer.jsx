import React from 'react';
export default function Answer() {
  return (
    <div>
      <div class="sradio-wrap">
        <input type="radio" name="select" className="select_1" />
        <label for="1" className="s1p">
          1
        </label>
      </div>
      <div class="sradio-wrap">
        <input type="radio" name="select" className="select_2" />
        <label for="2" className="s2p">
          2
        </label>
      </div>
      <div class="sradio-wrap">
        <input type="radio" name="select" className="select_3" />
        <label for="3" className="s3p">
          3
        </label>
      </div>
      <div class="sradio-wrap">
        <input type="radio" name="select" className="select_4" />
        <label for="4" className="s4p">
          4
        </label>
      </div>
      <div class="sradio-wrap">
        <input type="radio" name="select" className="select_5" />
        <label for="5" className="s5p">
          5
        </label>
      </div>
      <div class="sradio-wrap">
        <input type="radio" name="select" className="select_6" />
        <label for="6" className="s6p">
          모름
        </label>
      </div>
    </div>
  );
}
